import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardAvatar from '../../components/Card/CardAvatar.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';

import avatar from '../../assets/img/faces/marc.jpg';

const styles = {
   cardCategoryWhite: {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
   },
   cardTitleWhite: {
      color: '#FFFFFF',
      marginTop: '0px',
      minHeight: 'auto',
      fontWeight: '300',
      fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
      marginBottom: '3px',
      textDecoration: 'none',
   },
};

class UserProfileView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userProfileData_s: this.props.userProfileData,
      };
   }

   componentWillReceiveProps(nextProps) {
      if (!_.isEqual(nextProps.userProfileData, this.state.userProfileData_s)) {
         this.setState({ userProfileData_s: nextProps.userProfileData });
      }
   }

   updateProfileState = (field) => {
      this.state.userProfileData_s[field.id] = field.value;
      this.setState({ userProfileData_s: this.state.userProfileData_s });
   };

   render() {
      const { classes, userProfileUpdate } = this.props;
      const { userProfileData_s } = this.state;
      return (
        <div>
           <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                 <Card>
                    <CardHeader color="primary">
                       <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                       <p className={classes.cardCategoryWhite}>Complete your profile</p>
                    </CardHeader>
                    <CardBody>
                       <GridContainer>
                          <GridItem xs={12} sm={12} md={5}>
                             <CustomInput
                               labelText="Company (disabled)"
                               id="company-disabled"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  disabled: true,
                               }}
                             />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                             <CustomInput
                               labelText="Username"
                               id="username"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.username,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                             <CustomInput
                               labelText="Email address"
                               id="email"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.email,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                       </GridContainer>
                       <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                             <CustomInput
                               labelText="First Name"
                               id="firstName"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.firstName,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                             <CustomInput
                               labelText="Last Name"
                               id="lastName"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.lastName,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                       </GridContainer>
                       <GridContainer>
                          <GridItem xs={12} sm={12} md={4}>
                             <CustomInput
                               labelText="City"
                               id="city"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.city,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                             <CustomInput
                               labelText="Country"
                               id="country"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.country,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                             <CustomInput
                               labelText="Postal Code"
                               id="postCode"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  value: userProfileData_s.postCode,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                       </GridContainer>
                       <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                             <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel>
                             <CustomInput
                               labelText="Tell us about you"
                               id="aboutMe"
                               formControlProps={{
                                  fullWidth: true,
                               }}
                               inputProps={{
                                  multiline: true,
                                  rows: 5,
                                  value: userProfileData_s.aboutMe,
                                  onChange: (e) => this.updateProfileState(e.target),
                               }}
                             />
                          </GridItem>
                       </GridContainer>
                    </CardBody>
                    <CardFooter>
                       <Button
                         color="primary"
                         onClick={() => userProfileUpdate(userProfileData_s)}
                       >
                          Update Profile
                       </Button>
                    </CardFooter>
                 </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                 <Card profile>
                    <CardAvatar profile>
                       <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={avatar} alt="..." />
                       </a>
                    </CardAvatar>
                    <CardBody profile>
                       <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                       <h4 className={classes.cardTitle}>Alec Thompson</h4>
                       <p className={classes.description}>
                          Don't be scared of the truth because we need to restart the
                          human foundation in truth And I love you like Kanye loves Kanye
                          I love Rick Owens’ bed design but the back is...
                       </p>
                       <Button color="primary" round>
                          Follow
                       </Button>
                    </CardBody>
                 </Card>
              </GridItem>
           </GridContainer>
        </div>
      );
   }
}

UserProfileView.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfileView);
