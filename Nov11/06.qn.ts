type Employee = { id: string, efficiency: number, maxTaskLimit: number };
type Task =  { id: string; time: number };

function distributeTasks(employees : Employee[], tasks) {
  const effective = [];
  const assignments = [];
  const distributed = {};
  for (let task of tasks) {
    type Obj = {tid: string; id: string; efficiency: number; maxTaskLimit: number; effectiveTime: number}
    let obj :Obj = {};
    for (let emp of employees) {
      obj["tid"] = task.id;
      obj["id"] = emp.id;
      obj["efficiency"] = emp.efficiency;
      obj["maxTaskLimit"] = emp.maxTaskLimit;
      obj["effectiveTime"] = task.time / emp.efficiency;
    }
    effective.push(obj);
  }
  effective.sort((a, b) => {
    if (a.effectiveTime < b.effectiveTime) return -1;
    return 0;
  });

  let totalValidDistributions = 0;
  for (let task of effective) {
    let obj = {};
    let newArr = [];

    for (let emp of employees) {
      if (emp.maxTaskLimit > 0) {
        obj["employee"] = emp.id;
        newArr.push(task.tid);
        obj["tasks"] = newArr;
        emp.maxTaskLimit--;
        assignments.push(obj);
        totalValidDistributions++;
        break;
      }
    }
  }

  const result = [];
  let totalTime = 0;
  for (let emp of employees) {
    let curTime = 0;
    let obj = {};
    let arr = [];
    for (let task of assignments) {
      if (task.employee === emp.id) {
        obj["employee"] = emp.id;
        for (var t of task.tasks) {
          arr.push(t);
        }
        obj["tasks"] = arr;
        for (let check of tasks) {
          if (check.id === t) {
            curTime += check.time;
            totalTime = Math.max(curTime, totalTime);
          }
        }
      }
    }
    result.push(obj);
  }
  distributed["totalValidDistributions"] = totalValidDistributions;
  Object.assign(distributed, result);
  console.log(result);
  distributed["totalTime"] = totalTime;
  return distributed;
}

const employees = [
  { id: "E1", efficiency: 2.0, maxTaskLimit: 2 },
  { id: "E2", efficiency: 2.0, maxTaskLimit: 1 },
  { id: "E3", efficiency: 1.0, maxTaskLimit: 2 },
];

const tasks = [
  { id: "T1", time: 4 },
  { id: "T2", time: 6 },
  { id: "T3", time: 3 },
];

console.log(distributeTasks(employees, tasks));
