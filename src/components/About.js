import React, { Component } from 'react';

import '../stylesheets/About.css';
import Divider from 'material-ui/Divider'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class About extends Component {
  render() {
    const SelectibleList = makeSelectable(List);
    return (
      <div className="About">
        <h1>About Mudika</h1>
        <p>We are a Christ-centered community of Indonesian young adults in Vancouver, Canada. We strive to provide young people with an opportunity to encounter God in ways that fit in with today's modern world. We would love to have you join us!</p>
        <h1>Our Team</h1>
        <h3>(2017-2019 Service Period)</h3>
       <SelectibleList>
         <ListItem
          value={1}
          primaryText="Christopher Kevin"
          secondaryText="Youth Leader"
          leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18192625_10208890367806990_5480354015104807411_o.jpg?oh=a13daf64efacaa83f28bef49113e6598&oe=5A21CB89" />}
          nestedItems={[
            <ListItem value={2} primaryText="Third-year Actuarial Science Student at Simon Fraser University. Co-op experience: Actuarial Co-op Student in iA Financial Group, and TD Insurance" />
          ]}
         />
         <ListItem
         value={1}
         primaryText="Andreas Yoga"
         secondaryText="Vice Youth Leader"
         leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18192625_10208890367806990_5480354015104807411_o.jpg?oh=a13daf64efacaa83f28bef49113e6598&oe=5A21CB89" />}
         nestedItems={[
           <ListItem value={2} primaryText="Third-year Actuarial Science Student at Simon Fraser University. Co-op experience: Actuarial Co-op Student in iA Financial Group, and TD Insurance" />
         ]}
        />
        <ListItem
        value={3}
        primaryText="Kevin Antonius"
        secondaryText="Cell Group Coordinator"
        leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18192625_10208890367806990_5480354015104807411_o.jpg?oh=a13daf64efacaa83f28bef49113e6598&oe=5A21CB89" />}
        nestedItems={[
          <ListItem value={4} primaryText="Third-year Actuarial Science Student at Simon Fraser University. Co-op experience: Actuarial Co-op Student in iA Financial Group, and TD Insurance" />
        ]}
       />
       <ListItem
       value={5}
       primaryText="Daniel Maringka"
       secondaryText="Choir Coordinator"
       leftAvatar={<Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18192625_10208890367806990_5480354015104807411_o.jpg?oh=a13daf64efacaa83f28bef49113e6598&oe=5A21CB89" />}
       nestedItems={[
         <ListItem value={6} primaryText="Third-year Actuarial Science Student at Simon Fraser University. Co-op experience: Actuarial Co-op Student in iA Financial Group, and TD Insurance" />
       ]}
      />
       </SelectibleList>
      </div>
    );
  }
}

export default About;