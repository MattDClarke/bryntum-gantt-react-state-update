import { BryntumGantt } from "@bryntum/gantt-react";
import * as React from "react";
import "./App.scss";
import { ganttConfig } from "./ganttConfig";

function App() {
  const [data, setData] = React.useState();
  console.log("App component rendered", data);
  const gantt = React.useRef();


  
  React.useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const tasks = [
      {
        id: "22483ef3-9a9d-4584-a9a7-3a7604916b3b",
        name: "Research",
        startDate: "2024-08-04T22:00:00Z",
        endDate: "2024-08-11T22:00:00Z",
        effort: null,
        effortUnit: null,
        duration: null,
        durationUnit: null,
        percentDone: 100,
        schedulingMode: null,
        note: null,
        constraintType: null,
        constraintDate: null,
        manuallyScheduled: 1,
        unscheduled: null,
        ignoreResourceCalendar: null,
        effortDriven: null,
        inactive: null,
        cls: null,
        iconCls: null,
        color: null,
        parentIndex: null,
        expanded: null,
        calendar: null,
        deadline: null,
        direction: null,
      },
      {
        id: "465f8424-6c51-4f26-93c0-fc1b6b6ea177",
        name: "Build prototype",
        startDate: "2024-08-11T22:00:00Z",
        endDate: "2024-08-18T22:00:00Z",
        effort: null,
        effortUnit: null,
        duration: null,
        durationUnit: null,
        percentDone: 50,
        schedulingMode: null,
        note: null,
        constraintType: null,
        constraintDate: null,
        manuallyScheduled: 1,
        unscheduled: null,
        ignoreResourceCalendar: null,
        effortDriven: null,
        inactive: null,
        cls: null,
        iconCls: null,
        color: null,
        parentIndex: null,
        expanded: null,
        calendar: null,
        deadline: null,
        direction: null,
      },
      {
        id: "444",
        name: "test",
        startDate: "2024-08-12T22:00:00Z",
        endDate: "2024-08-18T22:00:00Z",
        effort: null,
        effortUnit: null,
        duration: null,
        durationUnit: null,
        percentDone: 10,
        schedulingMode: null,
        note: null,
        constraintType: null,
        constraintDate: null,
        manuallyScheduled: 1,
        unscheduled: null,
        ignoreResourceCalendar: null,
        effortDriven: null,
        inactive: null,
        cls: null,
        iconCls: null,
        color: null,
        parentIndex: null,
        expanded: null,
        calendar: null,
        deadline: null,
        direction: null,
      },
    ];
    const dependencies = [
      {
        id: "4b75b7f3-e719-4bc5-b74b-9abacde7d557",
        type: 2,
        lag: 0,
        lagUnit: "day",
        active: 1,
        fromEvent: "22483ef3-9a9d-4584-a9a7-3a7604916b3b",
        toEvent: "465f8424-6c51-4f26-93c0-fc1b6b6ea177",
        fromSide: "end",
        toSide: "start",
      },
    ];
    setData({ tasks, dependencies });
  };
  
  const modifyTask = () => {
    const tasksData = data.tasks;
    const updatedTasks = tasksData.map((task) => {
      if (task.id === "444") {
        return { ...task, id: "new-id", name: "new name" }; // spread the task and update the id
      }
      return task;
    });
    console.log(data.tasks, updatedTasks);
    setData((currentData) => {
      return {
        dependencies: currentData.dependencies,
        tasks: updatedTasks,
      };
    });
  };
  
  return (
    <>
    <button onClick={modifyTask}>Modify Task 3 id and name</button>
      {data ? (
        <BryntumGantt
          ref={gantt}
          tasks={data.tasks}
          dependencies={data.dependencies}
          {...ganttConfig}
        />
      ) : (
        <div>no data</div>
      )}
    </>
  );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/gantt/docs/guide/Gantt/integration/react/data-binding

export default App;
