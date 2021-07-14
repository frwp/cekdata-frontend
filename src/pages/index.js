import React, { Component } from 'react'
import Layout from '../components/layout';

export class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      timeout: false,
      menuTimeout: false,
      menu: '',
      loading: 'is-loading'
    }

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenMenu(menu) {
    // file deepcode ignore ReactNextState: 
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
      menu,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 350);
  }

  handleCloseMenu() {
    this.setState({
      menuTimeout: !this.state.menuTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isMenuVisible: !this.state.isMenuVisible,
        menu: '',
      })
    }, 350);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isMenuVisible) {
        this.handleCloseMenu();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}></div>
        <div id="wrapper">
          <Header onOpenMenu={this.handleOpenMenu} timeout={this.state.timeout} />
          <Main
            isMenuVisible={this.state.isMenuVisible} 
            timeout={this.state.timeout}
            menuTimeout={this.state.menuTimeout}
            menu={this.state.menu}
            onCloseMenu={this.handleCloseMenu}
            setWrapperRef={this.setWrapperRef}
          />
        </div>
      </Layout>
    )
  }
}

export default Index
