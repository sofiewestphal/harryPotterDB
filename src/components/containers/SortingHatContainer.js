import React from 'react';
import { connect } from 'react-redux';
import SortingHat from '../representations/SortingHat';
import { fetchingYourHouse, successfetchingYourHouse, errorFetchingYourHouse } from '../../actions';

class SortingHatContainer extends React.Component {

    getHouse(){
        this.props.fetchingYourHouse(true);

        fetch("https://www.potterapi.com/v1/sortinghat?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
        .then(result => result.json())
        .then(
            (result) => {
                this.props.successfetchingYourHouse(result);
                this.props.fetchingYourHouse(false);
            },
    
            (error) => {
                this.props.errorFetchingYourHouse(error);
                this.props.fetchingYourHouse(false);
            }
        )  
    }

    render(){        
        const { yourHouse, gotHouse, isLoading } = this.props;
        
        return (
            <div>
            {
                !isLoading &&
                <SortingHat 
                    gotHouse = {gotHouse}
                    yourHouse = {yourHouse}
                    getHouse = {this.getHouse.bind(this)}
                />
            }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        gotHouse: state.yourHouse.gotHouse,
        yourHouse: state.yourHouse.yourHouse,
        isLoading: state.yourHouse.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingYourHouse: (bool) => dispatch(fetchingYourHouse(bool)), 
        successfetchingYourHouse: (result) => dispatch(successfetchingYourHouse(result)), 
        errorFetchingYourHouse: (error) => dispatch(errorFetchingYourHouse(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingHatContainer);