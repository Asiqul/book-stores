import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../Style/Tab.css";
import Descbook from "./Detail-Desc-Book.jsx";
import Detailbook from "./Detail-Book.jsx";

export default () => (
  <Tabs className="bg-white flex flex-col">
    <TabList className="bg-white flex flex-row gap-5 font-medium">
      <Tab>Deskripsi Buku</Tab>
      <Tab>Detail Buku</Tab>
    </TabList>
    <TabPanel className="bg-white mt-5 ml-2 mr-2 text-sm">
      <Descbook />
    </TabPanel>
    <TabPanel className=" bg-white mt-0 ml-2 mr-2 text-sm">
      <Detailbook />
    </TabPanel>
  </Tabs>
);
