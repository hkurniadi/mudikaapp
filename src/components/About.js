import React, { Component } from 'react';

// Material UI components
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

// Stylesheets
import '../stylesheets/About.css';

class About extends Component {
  render() {
    const SelectibleList = makeSelectable(List);
    return (
      <div className="About component">
        <h1 className="component-title">About Mudika</h1>
        <p className="about-description">We are a Christ-centered community of Indonesian young adults in Vancouver, Canada. We strive to provide young people with an opportunity to encounter God in ways that fit in with today's modern world. We would love to have you join us!</p>
        <hr className="divider" />
        <h1>Our Team</h1>
        <h3>(2017-2019)</h3>
        {/* TODO: change this ListItem content into taking values from backend instead of hardcoded */}
        <SelectibleList>
          <ListItem
            value={1}
            className="team-member"
            primaryText="Christopher Kevin"
            secondaryText="Youth Leader"
            leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18192625_10208890367806990_5480354015104807411_o.jpg?oh=a13daf64efacaa83f28bef49113e6598&oe=5A21CB89" />}
            nestedItems={[
              <ListItem 
                value={2}
                className="team-member"
                primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." />
            ]}
          />
          <ListItem
            value={3}
            className="team-member"
            primaryText="Andreas Yoga"
            secondaryText="Vice Youth Leader"
            leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p320x320/14449066_10208612227960885_7588165806591195629_n.jpg?oh=6fb93a8b79652bd4cb864fb7aceb9b1f&oe=5A54BD07" />}
            nestedItems={[
              <ListItem 
                value={4}
                className="team-member"
                primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." />
            ]}
          />
          <ListItem
            value={5}
            className="team-member"
            primaryText="Kevin Antonius"
            secondaryText="Cell Group Coordinator"
            leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/10348382_10203657782357457_2827906650701100469_n.jpg?oh=3679fddf5b97276a054f4722c7b1633b&oe=5A175264" />}
            nestedItems={[
              <ListItem 
                value={6}
                className="team-member"
                primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." />
            ]}
          />
          <ListItem
            value={7}
            className="team-member"
            primaryText="Daniel Maringka"
            secondaryText="Choir Coordinator"
            leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/c81.0.320.320/p320x320/19511486_10211606921400057_6209255492062548257_n.jpg?oh=cbf4c42df6c61a8ceda6ccd180c26a0c&oe=5A1869B1" />}
            nestedItems={[
              <ListItem 
                value={8}
                className="team-member" 
                primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio." />
            ]}
          />
        </SelectibleList>
      </div>
    );
  }
}

export default About;