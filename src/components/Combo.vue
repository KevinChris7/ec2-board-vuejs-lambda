<template>
    <select @change="onChange($event)" class="select" name="AWS_Account" id="account" v-model="nameKey">{{name}}
        <option value="1">UAT</option>
        <option value="2">Development</option>
        <option value="3">Production</option>
    </select>
    <div class="container mt-4">
    <table class="table table-bordered">
        <thead>
            <tr>
            <th class="text-left">Name</th>
            <th></th>
            <th class="text-left">Instance Id</th>
            <th></th> 
            <th class="text-left">Status</th>
            <th></th>
            <th class="text-left">Instance Type</th>
            <th></th> 
            <th class="text-left">AvailabilityZone</th>
            <th></th>                          
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.name">
            <td>{{ user.name }}</td>
            <th></th>       
            <td>{{ user.id }}</td>
            <th></th>
            <td>{{ user.username }}</td>    
            <th></th>
            <td>{{ user.email }}</td>
            <th></th>
            <td>{{ user.website }}</td>
            </tr>            
        </tbody>
    </table>
  </div>

</template>

<script>

export default {
    name: 'Combo',
    props: {
        name: String,
    },
    data() {
        return {
            nameKey: "",
            users: [],
            response: [],

        }
    },

    methods: {
        async onChange(event) {
            console.log(event.target.value)
            if (event.target.value === "1") {
                const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
                    .then(response => {
                        this.users = response;
                    //this.$emit(data);
                        console.log(response)
                    
                }
                )
            return data
            }
            else if (event.target.value === "2") {
                const data = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
                    .then(response => {
                        this.users = response;
                    //this.$emit(data);
                        console.log(response)
                }
                )
            return data
            }
            else {
                const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
                    .then(response => {
                        this.users = response;
                    //this.$emit(data);
                        console.log(response)
                }
                )       
            return data
            }
            
        },              
    }
}
</script>

<style scoped>
.table{
    bottom: 30px;
}
</style>