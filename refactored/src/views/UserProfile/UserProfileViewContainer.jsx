import React from 'react';
import { connect } from 'react-redux';
import UserProfileView from './UserProfileView.jsx';
// Store Actions
import { fetchDUserProfileAction, userProfileUpdateAction } from '../../store/actions';

class UserProfileViewContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         refresh: false,
      };
   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps);
   }

   render() {
      const { userProfileData } = this.props;
      return (
        <div>
           <UserProfileView
             key="user prof"
             userProfileData={userProfileData}
             userProfileUpdate={(updateData) => {
                this.props.userUpdateProfile(updateData);
                // this.setState({ refresh: !this.state.refresh });
             }}
           />
           <pre>{JSON.stringify(userProfileData, undefined, 2)}</pre>
        </div>
      );
   }
}

const mapStoreStateToProps = () => ({ userProfileData: fetchDUserProfileAction().payload });

const mapDispatchToProps = (dispatch) => ({
   userUpdateProfile: obj => dispatch(userProfileUpdateAction(obj)),
});

export default connect(mapStoreStateToProps, mapDispatchToProps)(UserProfileViewContainer);
