class User {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    getJob() {
        return this.job;
     
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

export {User as default}
