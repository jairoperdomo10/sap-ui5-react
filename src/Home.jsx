import React from "react";
import {
  Card,
  Text,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useState } from "react";
import "@ui5/webcomponents-icons/dist/icons/line-chart.js";
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import "@ui5/webcomponents-icons/dist/icons/list.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";
import { useHistory } from "react-router-dom";

export function Home() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);
  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 400);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 400);
    }
  };
  const history = useHistory();
  const handleProgressHeaderClick = () => {
    history.push("/detail");
  };

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  const dataset = [
    {
      month: "January",
      data: 65,
    },
    {
      month: "February",
      data: 59,
    },
    {
      month: "March",
      data: 80,
    },
    {
      month: "April",
      data: 81,
    },
    {
      month: "May",
      data: 56,
    },
    {
      month: "June",
      data: 55,
    },
    {
      month: "July",
      data: 40,
    },
  ];

  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100),
      },
    };
  });

  const tableColumns = [
    {
      Header: "Name",
      accessor: "name", // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Friend Name",
      accessor: "friend.name",
    },
    {
      Header: "Friend Age",
      accessor: "friend.age",
    },
  ];

  return (
    <div>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Card
          heading="Stock Price"
          subheading={`Click here to switch to ${switchToChart}`}
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
          headerInteractive
          onHeaderClick={handleHeaderClick}
          avatar={
            <Icon
              name={
                toggleCharts === "lineChart"
                  ? "line-chart"
                  : "horizontal-bar-chart"
              }
            />
          }
        >
          <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
          {toggleCharts === "lineChart" ? (
            <LineChart
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dimensions={[{ accessor: "month" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>
        <Card
          heading="Progress"
          headerInteractive
          subheading="List"
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
          avatar={<Icon name="list" />}
          onHeaderClick={handleProgressHeaderClick}
        >
          <List>
            <StandardListItem info="finished" infoState={ValueState.Success}>
              Activity 1
            </StandardListItem>
            <StandardListItem info="failed" infoState={ValueState.Error}>
              Activity 2
            </StandardListItem>
            <StandardListItem
              info="in progress"
              infoState={ValueState.Warning}
              style={{ height: "80px" }}
            >
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level={TitleLevel.H5}>Activity 3</Title>
                <ProgressIndicator value={89} valueState={ValueState.Success} />
              </FlexBox>
            </StandardListItem>
            <StandardListItem
              info="in progress"
              infoState={ValueState.Warning}
              style={{ height: "80px" }}
            >
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level={TitleLevel.H5}>Activity 4</Title>
                <ProgressIndicator value={5} valueState={ValueState.Error} />
              </FlexBox>
            </StandardListItem>
          </List>
        </Card>
        <Card
          heading="AnalyticalTable"
          style={{ width: "900px", ...spacing.sapUiContentPadding }}
          avatar={<Icon name="table-view" />}
          subheading="List"
        >
          <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            visibleRows={5}
          />
        </Card>
      </FlexBox>
    </div>
  );
}
