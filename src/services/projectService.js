import axios from 'axios'

const API_URL = 'http://localhost:3000/projects'

const projectService = {
    async getProjects(){
            try {        
                const response = await axios.get(API_URL); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }    
          },
    
    async getProject(id){
            
            try {        
                const response = await axios.get(`${API_URL}/${id}`); 
                return response.data;  
            }
            catch (error) {
                console.log(error);
            }  

    },
    async updateProject(){

    },
    async deleteProject(){
         
    }
}

export default projectService





// import axios from 'axios';

// const API_URL = 'http://localhost:3000/projects';

// const projectService = {
//     async getProject() {
//         try {
//             const response = await axios.get(API_URL);
//             const projects = await response.data;
//             return projects;
//         } catch (error) {
//             console.error('Error fetching projects:', error);
//             throw error; // Rethrow the error to handle it in the calling code
//         }
//     },
//     async createProject(projectData) {
//         try {
//             const response = await axios.post(API_URL, projectData);
//             const newProject = await response.data;
//             return newProject;
//         } catch (error) {
//             console.error('Error creating project:', error);
//             throw error;
//         }
//     },
//     async updateProject(projectId, updatedData) {
//         try {
//             const response = await axios.put(`${API_URL}/${projectId}`, updatedData);
//             const updatedProject = await response.data;
//             return updatedProject;
//         } catch (error) {
//             console.error('Error updating project:', error);
//             throw error;
//         }
//     },
//     async deleteProject(projectId) {
//         try {
//             await axios.delete(`${API_URL}/${projectId}`);
//             // No need to return data for delete operation
//         } catch (error) {
//             console.error('Error deleting project:', error);
//             throw error;
//         }
//     }
// };

// export default projectService;



 