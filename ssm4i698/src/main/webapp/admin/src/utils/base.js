const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4i698/",
            name: "ssm4i698",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4i698/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线学习系统"
        } 
    }
}
export default base
