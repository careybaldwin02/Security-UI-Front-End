import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import Header from './Header';

import './App.css'


class MainPage extends Component {


render() {
    return(
        <div className = "container">
        
            <SideBar />
            <Header />

            <div className = "main">

            <h2>Search Options</h2>
            <Link to = "/recent">
            <button>View Recent Searches</button>
            </Link>
            <Link to = "/person-demo">
            <button>Search by Person</button>
            </Link>
            <Link to = "/location-demo">
            <button>Search by Location</button>
            </Link>

            {/* <form >
                 <div className = "inputs">
                 <i class="far fa-user"> demo person search</i>
                <input
                placeholder = "Enter a name or home address of a person"
                 />

                <input
                placeholder = "Select a time frame"
                 />
                </div>
                <div className = "button-group">
                 <button>Search By Person</button>
                 </div>
            </form>

            <form>
                <div className = "inputs">
                <Link to="/location-demo">
                <i class="far fa-compass"> demo location search</i>
                </Link>

                <input
                placeholder = "Enter a zip code, Town or Country"
                 />
                <input
                placeholder = "Select a time frame"
                 />
                 </div>
                 <div className = "button-group">
                 <button>Search By Location</button>
                 </div>
            </form> */}

            {/* <div className = "dev-notes">
                <p>
                (Developer Notes: Clicking on a search button or search fields will automatically
                populate the corresponding field with a preprogrammed entry. Clicking on a search
                button at that point will open the search results page. In the toolbar, the circled “P”
                icon indicates that the app is actively conducting background scanning for nearby
                phones, though this is not a feature with which the user can interface.)
                </p>
            </div> */}

                </div>
            </div>

    )
}

}

export default MainPage;