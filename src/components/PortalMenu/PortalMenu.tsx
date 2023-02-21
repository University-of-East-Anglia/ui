import React, { Component } from "react";
import "./PortalMenu.scss";

export interface Props {
  data: navItem[];
}

interface navItem {
  children?: [];
  friendlyURL?: string;
  hidden?: boolean;
  layoutId?: string;
  nameCurrentValue?: string;
  parentLayoutId?: string;
  priority?: number;
  uuid?: string;
  className?: string;
  withToggle?: any;
  map?: any;
}

export interface ComponentState {
  menuActive: boolean;
}

export class PortalMenu extends Component<Props, ComponentState> {
  state: ComponentState = {
    menuActive: false,
  };

  setActiveLink() {
    var links = document.getElementsByTagName('a');
    //set the pathname unless at home url in which case we set it to target /my-dashboard
    var searchedFor = ""
    if(document.location.pathname === "/") {
      searchedFor = "/my-dashboard"
    } else {
      searchedFor = document.location.pathname; //'/departments/learning-and-teaching/students/academic-cycle/regulations-and-discipline'
    }; 
    //couldn't think of a more elegant way to do this but here we are opening the navigation at the current page url
    for (const link of links) {
      if (link.pathname === searchedFor) {
        var level = searchedFor.split('/').length;
        {level > 0 && link.classList.add("active")};
        {level > 1 && link.parentElement.parentElement.classList.add("open")};
        {level > 2 && link.parentElement.parentElement.parentElement.parentElement.classList.add("open")};
        {level > 3 && link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("open")};
        {level > 4 && link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("open")};
        {level > 5 && link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("open")};
      }
    }
  }

  //use componentDidMount to set state when the component is ready
  componentDidUpdate() {
    this.setActiveLink();
  }


  render() {
    const menuState = () => {
      this.state.menuActive
        ? this.setState({ menuActive: false })
        : this.setState({ menuActive: true });
    };

    const toggleSubmenu = (e: any) => {
      //console.log(e.target.childNodes);
      e.preventDefault();
      if (e.target.classList.contains("oc-submenu-trigger")) {
        console.log(e.target.nextSibling);
        if (!e.target.nextSibling.classList.contains("open")) {
          e.target.nextSibling.classList.add("open");
          e.target.lastChild.classList.add("open-icon");
        } else {
          e.target.nextSibling.classList.remove("open");
          e.target.lastChild.classList.remove("open-icon");
        }
      } else if (e.target.classList.contains("menu-chevron")) {
        if (!e.target.parentElement.parentElement.nextSibling.classList.contains("open")) {
          e.target.parentElement.parentElement.nextSibling.classList.add("open");
          e.target.parentElement.parentElement.lastChild.classList.add("open-icon");
        } else {
          e.target.parentElement.parentElement.nextSibling.classList.remove("open");
          e.target.parentElement.parentElement.lastChild.classList.remove("open-icon");
        }
      } else {
        if (!e.target.parentElement.nextSibling.classList.contains("open")) {
          e.target.parentElement.nextSibling.classList.add("open");
          e.target.parentElement.lastChild.classList.add("open-icon");
        } else {
          e.target.parentElement.nextSibling.classList.remove("open");
          e.target.parentElement.lastChild.classList.remove("open-icon");
        }
      }
    };

    const menuActive = this.state.menuActive === false ? "" : " open";

    //----

    var items = this.props.data;
    var newArr: any = [];

    //clean API data from Liferay and create new array
    items.map((item: any) => {
      //remove hidden items then delete unnessary info
      if (item.hidden !== true) {
        delete item["colorSchemeId"];
        delete item["companyId"];
        delete item["createDate"];
        delete item["modifiedDate"];
        delete item["mvccVersion"];
        delete item["css"];
        delete item["description"];
        delete item["descriptionCurrentValue"];
        delete item["groupId"];
        delete item["iconImageId"];
        delete item["keywords"];
        delete item["keywordsCurrentValue"];
        delete item["lastPublishDate"];
        delete item["layoutPrototypeLinkEnabled"];
        delete item["layoutPrototypeUuid"];
        delete item["mvccVernamesion"];
        delete item["plid"];
        delete item["privateLayout"];
        delete item["robots"];
        delete item["robotsCurrentValue"];
        delete item["sourcePrototypeLayoutUuid"];
        delete item["themeId"];
        delete item["name"];
        delete item["title"];
        delete item["titleCurrentValue"];
        delete item["type"];
        delete item["typeSettings"];
        delete item["userId"];
        delete item["userName"];
        newArr.push(item)
      }
    })

    //create tree from layoutId and parentLayoutId
    function unflatten(items: navItem) {
      var tree = [], mappedArr: any = {}
      // Build a table and map items to objects
      items.map((item: navItem) => {
        if (!mappedArr.hasOwnProperty(item.layoutId!)) { // in case of duplicates
          mappedArr[item.layoutId!] = item; // the extracted id as key, and the item as value
          mappedArr[item.layoutId!].children = [];  // under each item, add a key "children" with an empty array as value
        }
      })

      // If root-level nodes are not included, include them
      items.map((item: navItem) => {
        if (!mappedArr.hasOwnProperty(item.parentLayoutId!)) {
          // make up an item for the root-level
          var newItem: navItem = {};
          newItem.uuid = '';
          newItem.nameCurrentValue = 'MyUEANavigation';
          newItem.parentLayoutId = '';
          newItem.priority = 0;
          mappedArr[item.parentLayoutId!] = newItem; // the parent id as key, and made-up an item as value
          mappedArr[item.parentLayoutId!].children = []; // give it a child array to place everything into
        }
      })

      // Loop over every new array item
      for (var id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
          // If the element is not at the root level, add it to its parent array of children
          if (mappedArr[id].parentLayoutId) {
            mappedArr[mappedArr[id].parentLayoutId].children.push(mappedArr[id]);
            mappedArr[mappedArr[id].parentLayoutId].children.sort(function (a: any, b: any) {
              var x = a["priority"]; var y = b["priority"];
              return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
          }
          // If the element is at the root level, directly push to the tree
          else {
            tree.push(mappedArr[id]);
          }
        }
      }
      return tree;
    }
    var result = unflatten(newArr);
    //console.log(result[0].children);

    const NavLinkItem = ({ withToggle, className, friendlyURL, nameCurrentValue }: navItem) => {

      return (
        <a
          href={friendlyURL}
          role="menuitem"
          className={className}
        >
          <span className="menu-item-title">{nameCurrentValue}</span>
          {withToggle &&
            <span onClick={withToggle && toggleSubmenu}>
              <svg
                id="arrow-icon"
                className="svg-inline--fa fa-angle-down fa-w-10 canvas_menu_group_item__icon fa-fw"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="angle-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  className="menu-chevron"
                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                ></path>
              </svg>
            </span>
          }
        </a>
      )
    }

    return (
      <nav data-swiftype-index="false" className="oc-portal-main">
        <button onClick={menuState} className="" title="Open Menu">
          <svg
            className="oc-search-icon"
            focusable="false"
            role="presentation"
            viewBox="0 0 712 712"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
          Menu
        </button>
        <div className={"oc-menu-container" + menuActive}>
          <button onClick={menuState} className="close-menu" title="Close Menu">
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <form className="oc-search" action="/search" method="get">
            <div className="oc-search-input-cont">
              <input
                className="oc-search-input"
                name="query"
                placeholder="Search"
                title="Search"
                type="text"
              />
              <button title="Search" className="oc-search-button" type="submit">
                <span id="jbfs__null__null">
                  <svg
                    className="oc-search-icon"
                    focusable="false"
                    role="presentation"
                    viewBox="0 0 512 512"
                  >
                    <path d="M503.254 467.861l-133.645-133.645c27.671-35.13 44.344-79.327 44.344-127.415 0-113.784-92.578-206.362-206.362-206.362s-206.362 92.578-206.362 206.362 92.578 206.362 206.362 206.362c47.268 0 90.735-16.146 125.572-42.969l133.851 133.851c5.002 5.002 11.554 7.488 18.106 7.488s13.104-2.486 18.106-7.488c10.004-10.003 10.004-26.209 0.029-36.183zM52.446 206.801c0-85.558 69.616-155.173 155.173-155.173s155.174 69.616 155.174 155.173-69.616 155.173-155.173 155.173-155.173-69.616-155.173-155.173z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>

          {/* Next tier - tier 0 */}

          <ul className={"oc-menu"} role="menu">
            {result[0].children.map((item: navItem) =>
              item.children?.length === 0 ? (
                <li key={item.uuid} className="oc-menu-item" role="none" data-priority={item.priority}>
                  <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                </li>
              ) : (
                <li key={item.uuid} className="oc-menu-item oc-menu-group-container" role="none" data-priority={item.priority}>
                  <NavLinkItem withToggle={toggleSubmenu} className={'oc-submenu-trigger'} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />

                  {/* Next tier - tier 1 */}

                  <ul className="oc-menu-group oc-menu-group--tier1" role="menu">
                    {item.children?.map((item: navItem) =>
                      item.children?.length === 0 ? (
                        <li key={item.uuid} className="oc-menu-item" role="none">
                          <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                        </li>
                      ) : (
                        <li key={item.uuid} className="oc-menu-item oc-menu-group-container" role="none" data-priority={item.priority}>
                          <NavLinkItem withToggle={toggleSubmenu} className={'oc-submenu-trigger'} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />

                          {/* Next tier - tier 2 */}

                          <ul className="oc-menu-group oc-menu-group--tier2" role="menu">
                            {item.children?.map((item: navItem) =>
                              item.children?.length === 0 ? (
                                <li key={item.uuid} className="oc-menu-item" role="none">
                                  <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                                </li>
                              ) : (
                                <li key={item.uuid} className="oc-menu-item oc-menu-group-container" role="none" data-priority={item.priority}>
                                  <NavLinkItem withToggle={toggleSubmenu} className={'oc-submenu-trigger'} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />

                                  {/* Next tier - tier 3 */}

                                  <ul className="oc-menu-group oc-menu-group--tier3" role="menu">
                                    {item.children?.map((item: navItem) =>
                                      item.children?.length === 0 ? (
                                        <li key={item.uuid} className="oc-menu-item" role="none">
                                          <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                                        </li>
                                      ) : (
                                        <li key={item.uuid} className="oc-menu-item oc-menu-group-container" role="none" data-priority={item.priority}>
                                          <NavLinkItem withToggle={toggleSubmenu} className={'oc-submenu-trigger'} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />

                                          {/* Next tier - tier 4 */}

                                          <ul className="oc-menu-group oc-menu-group--tier4" role="menu">
                                            {item.children?.map((item: navItem) =>
                                              item.children?.length === 0 ? (
                                                <li key={item.uuid} className="oc-menu-item" role="none">
                                                  <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                                                </li>
                                              ) : (
                                                <li key={item.uuid} className="oc-menu-item oc-menu-group-container" role="none" data-priority={item.priority}>
                                                  <NavLinkItem withToggle={toggleSubmenu} className={'oc-submenu-trigger'} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />

                                                  {/* Next tier - tier 5 */}

                                                  <ul className="oc-menu-group oc-menu-group--tier5" role="menu">
                                                    {item.children?.map((item: navItem) => (
                                                      <li key={item.uuid} className="oc-menu-item" role="none" data-priority={item.priority}>
                                                        <NavLinkItem withToggle={undefined} className={" "} friendlyURL={item.friendlyURL} nameCurrentValue={item.nameCurrentValue} />
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </li>
                                              ))}
                                          </ul>
                                        </li>
                                      ))}
                                  </ul>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}
