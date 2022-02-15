

import './App.css';
import BasicRating from './toolbox/BasicRating';
import DataTable from './toolbox/DataTable';
import DividerStack from './toolbox/DividerStack';
import FixedBottomNavigation from './toolbox/FixedBottomNavigation';
import MediaControlCard from './toolbox/MediaControlCard';
import PrimarySearchAppBar from './toolbox/PrimarySearchAppBar';
import SimpleSnackbar from './toolbox/SimpleSnackbar';
import SwipeableDrawer from './toolbox/SwipeableDrawer';



function App() {
  return (
    <div className="App">
    <PrimarySearchAppBar/>
    <SwipeableDrawer/>
    <MediaControlCard/>
    <SimpleSnackbar/>
   <DataTable/>
   <DividerStack/>
   <BasicRating/>
   <FixedBottomNavigation/>
    </div>
  );
}

export default App;
