/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import IntlMessages from 'helpers/IntlMessages';
import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale,
} from 'redux/actions';

import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
  buyUrl,
  adminRoot,
} from 'constants/defaultValues';

import { MobileMenuIcon, MenuIcon } from 'components/svg';
import { getDirection, setDirection } from 'helpers/Utils';
import TopnavEasyAccess from './Topnav.EasyAccess';
import TopnavNotifications from './Topnav.Notifications';
import TopnavDarkSwitch from './Topnav.DarkSwitch';

const TopNav = ({
  intl,
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  locale,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  logoutUserAction,
  changeLocaleAction,
}) => {
  const [isInFullScreen, setIsInFullScreen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };

  const handleChangeLocale = (_locale, direction) => {
    changeLocaleAction(_locale);

    const currentDirection = getDirection().direction;
    if (direction !== currentDirection) {
      setDirection(direction);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const isInFullScreenFn = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };

  const handleSearchIconClick = (e) => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains('search')) {
        if (e.target.parentElement.classList.contains('search')) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        search();
        elem.classList.remove('mobile-view');
        removeEventsSearch();
      } else {
        elem.classList.add('mobile-view');
        addEventsSearch();
      }
    } else {
      search();
    }
    e.stopPropagation();
  };

  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  const addEventsSearch = () => {
    document.addEventListener('click', handleDocumentClickSearch, true);
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const toggleFullScreen = () => {
    const isFS = isInFullScreenFn();

    const docElm = document.documentElement;
    if (!isFS) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsInFullScreen(!isFS);
  };

  const handleLogout = () => {
    logoutUserAction(history);
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  const { messages } = intl;
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>

        <div className="search">
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder={messages['menu.search']}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={(e) => handleSearchInputKeyPress(e)}
          />
          <span
            className="search-icon"
            onClick={(e) => handleSearchIconClick(e)}
          >
            <i className="simple-icon-magnifier" />
          </span>
        </div>

        <div className="d-inline-block">
          <UncontrolledDropdown className="ml-2">
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              <span className="name">{locale.toUpperCase()}</span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              {localeOptions.map((l) => {
                return (
                  <DropdownItem
                    onClick={() => handleChangeLocale(l.id, l.direction)}
                    key={l.id}
                  >
                    {l.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className="position-relative d-none d-none d-lg-inline-block">
          <a
            className="btn btn-outline-primary btn-sm ml-2"
            target="_top"
            href={buyUrl}
          >
            <IntlMessages id="user.buy" />
          </a>
        </div>
      </div>
      <NavLink className="navbar-logo" to={adminRoot}>
        {/* <span className="d-none d-xs-block" >Investo</span> */}
        <svg
          width="165"
          height="34"
          viewBox="0 0 165 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M9.34007e-05 7.69866C9.34007e-05 7.94533 0.199206 8.1453 0.444823 8.1453H7.66713C7.91275 8.1453 8.11186 7.94533 8.11186 7.69866V0.446632C8.11186 0.199965 7.91275 0 7.66713 0H0.444822C0.199205 0 9.34007e-05 0.199965 9.34007e-05 0.446632V7.69866ZM0 32.996C0 33.2426 0.199112 33.4426 0.444729 33.4426H7.66713C7.91275 33.4426 8.11186 33.2426 8.11186 32.996V10.6929C8.11186 10.4463 7.91275 10.2462 7.66713 10.2462H0.444729C0.199112 10.2462 0 10.4463 0 10.6929V32.996ZM12.6291 32.996C12.6291 33.2426 12.8282 33.4426 13.0738 33.4426H20.2962C20.5418 33.4426 20.7409 33.2426 20.7409 32.996V20.8797C20.7409 18.35 22.1925 16.9779 24.1565 16.9779C26.0777 16.9779 27.4012 18.35 27.4012 20.8797V32.996C27.4012 33.2426 27.6004 33.4426 27.8459 33.4426H35.0683C35.3139 33.4426 35.5131 33.2426 35.5131 32.996V18.2642C35.5131 12.9904 32.5672 9.73173 27.6574 9.73173C24.9418 9.73173 23.0129 10.9897 21.5816 12.515C21.2912 12.8244 20.7409 12.6284 20.7409 12.2031V10.6929C20.7409 10.4463 20.5418 10.2462 20.2962 10.2462H13.0738C12.8282 10.2462 12.6291 10.4463 12.6291 10.6929V32.996ZM46.2144 33.332C46.2816 33.5023 46.4454 33.6141 46.6278 33.6141H53.4096C53.592 33.6141 53.7559 33.5023 53.8231 33.332L62.6925 10.8574C62.8081 10.5643 62.5931 10.2462 62.279 10.2462H54.8447C54.6527 10.2462 54.4824 10.3701 54.4223 10.5533L50.5052 22.5062C50.371 22.9156 49.7945 22.9156 49.6603 22.5062L45.7432 10.5533C45.6831 10.3701 45.5128 10.2462 45.3208 10.2462H37.7584C37.4443 10.2462 37.2293 10.5643 37.345 10.8574L46.2144 33.332ZM75.6041 34C80.0289 34 83.1562 32.2627 85.3634 29.6217C85.5186 29.436 85.4889 29.1602 85.3031 29.0055L81.4621 25.8094C81.2871 25.6638 81.0313 25.6749 80.8639 25.8295C79.3085 27.2652 77.8402 27.9115 76.0311 27.9115C73.7019 27.9115 71.9567 26.8117 71.2007 24.6459C71.1048 24.371 71.3178 24.0955 71.6078 24.0955H86.0792C86.3116 24.0955 86.5053 23.9157 86.5153 23.6826C86.5337 23.2509 86.5337 22.8125 86.5337 22.4233C86.5337 15.6059 82.8621 9.73173 74.8783 9.73173C68.0472 9.73173 63.2228 15.0913 63.2228 21.8659V21.9516C63.2228 29.1549 68.3461 34 75.6041 34ZM71.4342 19.9364C71.1589 19.9364 70.9488 19.687 71.0124 19.418C71.5413 17.1808 72.9358 15.7345 74.921 15.7345C76.9947 15.7345 78.4352 17.156 78.8597 19.4401C78.9085 19.7027 78.7006 19.9364 78.4346 19.9364H71.4342ZM99.1916 33.9571C104.827 33.9571 108.627 31.2988 108.627 26.1964V26.1107C108.627 21.6086 104.998 20.0222 100.43 18.7359C97.9962 18.007 96.6727 17.5782 96.6727 16.6778V16.592C96.6727 15.9489 97.3131 15.4772 98.5512 15.4772C100.287 15.4772 102.708 16.205 104.987 17.4071C105.206 17.5225 105.478 17.443 105.596 17.2247L107.961 12.8396C108.072 12.6344 108.007 12.3776 107.808 12.2568C105.207 10.6771 101.863 9.7746 98.6366 9.7746C93.2999 9.7746 89.372 12.5187 89.372 17.4496V17.5353C89.372 22.2089 93.001 23.7524 97.5693 24.953C100.003 25.639 101.284 26.0249 101.284 26.9253V27.0111C101.284 27.8257 100.643 28.2545 99.2343 28.2545C96.9591 28.2545 94.2204 27.4391 91.6793 25.8454C91.4667 25.7118 91.1838 25.7736 91.0522 25.9882L88.4793 30.173C88.3566 30.3724 88.4081 30.6336 88.6007 30.766C91.7335 32.9191 95.4426 33.9571 99.1916 33.9571ZM120.705 33.9142C122.85 33.9142 124.689 33.4517 126.111 32.7093C126.254 32.6346 126.341 32.4848 126.341 32.323V26.9051C126.341 26.5765 125.998 26.3595 125.693 26.4786C124.91 26.7845 124.102 26.9682 123.267 26.9682C121.772 26.9682 121.047 26.2822 121.047 24.6529V17.253C121.047 17.0064 121.246 16.8064 121.491 16.8064H125.981C126.227 16.8064 126.426 16.6064 126.426 16.3598V10.6929C126.426 10.4463 126.227 10.2462 125.981 10.2462H121.491C121.246 10.2462 121.047 10.0462 121.047 9.79962V4.81876C121.047 4.57209 120.847 4.37214 120.602 4.37214H113.379C113.134 4.37214 112.935 4.57209 112.935 4.81877V9.79962C112.935 10.0462 112.735 10.2462 112.49 10.2462H110.647C110.401 10.2462 110.202 10.4463 110.202 10.6929V16.3598C110.202 16.6064 110.401 16.8064 110.647 16.8064H112.49C112.735 16.8064 112.935 17.0064 112.935 17.253V26.2393C112.935 31.7704 115.838 33.9142 120.705 33.9142ZM141.071 34C148.5 34 153.879 28.4689 153.879 21.8659V21.7801C153.879 15.1771 148.542 9.73173 141.156 9.73173C133.728 9.73173 128.348 15.2628 128.348 21.8659V21.9516C128.348 28.5546 133.685 34 141.071 34ZM141.156 27.0968C138.296 27.0968 136.246 24.6957 136.246 21.8659V21.7801C136.246 18.9931 138.125 16.6349 141.071 16.6349C143.931 16.6349 145.981 19.036 145.981 21.8659V21.9516C145.981 24.7386 144.102 27.0968 141.156 27.0968ZM156.888 33.5534C156.888 33.8 157.087 34 157.333 34H164.555C164.801 34 165 33.8 165 33.5534V26.3013C165 26.0547 164.801 25.8547 164.555 25.8547H157.333C157.087 25.8547 156.888 26.0547 156.888 26.3013V33.5534Z"
            fill="#49CB67"
          />
        </svg>

        {/* <span className="logo-mobile d-block d-xs-none" /> */}
      </NavLink>

      <div className="navbar-right">
        {isDarkSwitchActive && <TopnavDarkSwitch />}
        <div className="header-icons d-inline-block align-middle">
          <TopnavEasyAccess />
          <TopnavNotifications />
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">Sarah Kortney</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Features</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    logoutUserAction: logoutUser,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
