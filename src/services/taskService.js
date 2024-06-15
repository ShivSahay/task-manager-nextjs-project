import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
}

export async function getTasksOfUser(userId) {
  console.log("userId => tesk Service",userId);
  const result = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
    return result;
}

export async function deleteTask(taskId) {
  console.log("taskId => tesk Service 2",taskId);
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
    return result;
}
