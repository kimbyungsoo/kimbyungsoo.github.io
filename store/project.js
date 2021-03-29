export const strict = false

export const state = () => ({
  projects: [
      {
          id : 0,
          name : "",
          description : "",
          img : "",
          tags : [],
          role: ""
      }
    ], 
});

//state의 데이터를 컴포넌트에서 가져오는 함수들
export const getters = {
  getProjects(state){
    return state.projects;
  },
  getProject(state, id){
      return state.projects.find(element => element.id == id);
  }
};

//state의 값을 변화시키는 동기형 함수들로 직접 호출 X
export const mutations = {
  addProject(state, param){
    state.projects += param
  },
};

//mutation을 호출하는 함수로, 비동기적일 수 있음.
export const actions = {
//   initializeTechNetInstance(commit,payload) {
//   },
};
