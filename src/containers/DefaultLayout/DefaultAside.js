import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (<div>
      <TabPane tabId="2" className="p-3">
      <div className="message">
        <div className="py-3 pb-5 mr-3 float-left">
          <div className="avatar">
            <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <span className="avatar-status badge-success"></span>
          </div>
        </div>
        <div>
          <small className="text-muted">Refka Massoudi</small>
          <small className="text-muted float-right mt-1">1:52 PM</small>
        </div>
        <div className="text-truncate font-weight-bold">Very satisfied</div>
        <small className="text-muted">
        I use Medim to take my appointments since February  and I'm really happy.
        </small>
      </div>
      <hr />
      <div className="message">
        <div className="py-3 pb-5 mr-3 float-left">
          <div className="avatar">
            <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <span className="avatar-status badge-success"></span>
          </div>
        </div>
        <div>
          <small className="text-muted">Salwa Essid</small>
          <small className="text-muted float-right mt-1">2:22 PM</small>
        </div>
        <div className="text-truncate font-weight-bold">I am completely satisfied.</div>
        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt...
        </small>
      </div>
      <hr />
      <div className="message">
        <div className="py-3 pb-5 mr-3 float-left">
          <div className="avatar">
            <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <span className="avatar-status badge-success"></span>
          </div>
        </div>
        <div>
          <small className="text-muted">Nessrine Agili</small>
          <small className="text-muted float-right mt-1">1:52 PM</small>
        </div>
        <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt...
        </small>
      </div>
      <hr />
      <div className="message">
        <div className="py-3 pb-5 mr-3 float-left">
          <div className="avatar">
            <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <span className="avatar-status badge-success"></span>
          </div>
        </div>
        <div>
          <small className="text-muted">Amira Ahmed</small>
          <small className="text-muted float-right mt-1">1:52 PM</small>
        </div>
        <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt...
        </small>
      </div>
      <hr />
      <div className="message">
        <div className="py-3 pb-5 mr-3 float-left">
          <div className="avatar">
            <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            <span className="avatar-status badge-success"></span>
          </div>
        </div>
        <div>
          <small className="text-muted">Fadwa Talbi</small>
          <small className="text-muted float-right mt-1">1:52 PM</small>
        </div>
        <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt...
        </small>
      </div>
    </TabPane>
    <TabPane tabId="3" className="p-3">
      <h6>Settings</h6>

      <div className="aside-options">
        <div className="clearfix mt-4">
          <small><b>Option 1</b></small>
          <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
        </div>
        <div>
          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </small>
        </div>
      </div>

      <div className="aside-options">
        <div className="clearfix mt-3">
          <small><b>Option 2</b></small>
          <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} size={'sm'}/>
        </div>
        <div>
          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </small>
        </div>
      </div>

      <div className="aside-options">
        <div className="clearfix mt-3">
          <small><b>Option 3</b></small>
          <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} disabled/>
          <div>
            <small className="text-muted">Option disabled.</small>
          </div>
        </div>
      </div>

      <div className="aside-options">
        <div className="clearfix mt-3">
          <small><b>Option 4</b></small>
          <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} />
        </div>
      </div>

      <hr />
      <h6>System Utilization</h6>

      <div className="text-uppercase mb-1 mt-4">
        <small><b>CPU Usage</b></small>
      </div>
      <Progress className="progress-xs" color="info" value="25" />
      <small className="text-muted">348 Processes. 1/4 Cores.</small>

      <div className="text-uppercase mb-1 mt-2">
        <small><b>Memory Usage</b></small>
      </div>
      <Progress className="progress-xs" color="warning" value="70" />
      <small className="text-muted">11444GB/16384MB</small>

      <div className="text-uppercase mb-1 mt-2">
        <small><b>SSD 1 Usage</b></small>
      </div>
      <Progress className="progress-xs" color="danger" value="95" />
      <small className="text-muted">243GB/256GB</small>

      <div className="text-uppercase mb-1 mt-2">
        <small><b>SSD 2 Usage</b></small>
      </div>
      <Progress className="progress-xs" color="success" value="10" />
      <small className="text-muted">25GB/256GB</small>
    </TabPane>
  </div>
  );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
