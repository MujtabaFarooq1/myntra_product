import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ALink from "../../../layouts/common/ALink";

export default function SizeGuideTab(props) {
  const { adClass = "" } = props;

  return (
    <>
      <div className="skel-pro-tabs sizeGuideTabs">
        {
          <Tabs
            className={`product-single-tabs ${adClass}`}
            selectedTabClassName="active"
            selectedTabPanelClassName="show"
          >
            <div className="container">
              <TabList className="nav nav-tabs">
                <Tab className="nav-item">
                  <ALink href="#" className="nav-link">
                    Size Chart
                  </ALink>
                </Tab>
                <Tab className="nav-item">
                  <ALink href="#" className="nav-link">
                    How To Measure
                  </ALink>
                </Tab>
              </TabList>

              <TabPanel className="tab-pane fade">
                <table className="table table-size">
                  <thead>
                    <tr>
                      <th>SIZE</th>
                      <th>CHEST (in.)</th>
                      <th>WAIST (in.)</th>
                      <th>HIPS (in.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>34-36</td>
                      <td>27-29</td>
                      <td>34.5-36.5</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>36-38</td>
                      <td>29-31</td>
                      <td>36.5-38.5</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>38-40</td>
                      <td>31-33</td>
                      <td>38.5-40.5</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>40-42</td>
                      <td>33-36</td>
                      <td>40.5-43.5</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>42-45</td>
                      <td>36-40</td>
                      <td>43.5-47.5</td>
                    </tr>
                    <tr>
                      <td>XLL</td>
                      <td>45-48</td>
                      <td>40-44</td>
                      <td>47.5-51.5</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>

              <TabPanel className="tab-pane fade">
                <div className="sizeGuideImageContainer">
                  <LazyLoadImage
                    alt="size guide"
                    src={"/images/sizeGuideImg.png"}
                    threshold={500}
                    effect="blur"
                    key={"sizeGuideImage"}
                  />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        }
      </div>
    </>
  );
}
