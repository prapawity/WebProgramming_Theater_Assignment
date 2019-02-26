Vue.component('navbar', {
    template: `
    <div>
    <nav style="z-index:2;text-align: right;background-color:tranparent">
    <a href="indextest.html">
        <img class="logo" style="width: auto;min-width: 10%; max-width: 15%;padding:10px" src="poster/moviehub1kpx.png">
    </a>
    <ul style="width:100;margin-bottom:0;text-align:right">
        <li v-if="!authen_state"> <button type='button' class="btn btn-success btn-lg" data-toggle="modal" data-target="#popUpWindow"
                style="background-color:orange;border-color: orange;color: black;" v-on:click="set_local()">Sign
                in / Sign up</button>
        </li>
        <li v-if="authen_state">
            <a href="information.html">
                <h1 style="color:orange;">Information</h1>
            </a>
        </li>
    </ul>
</nav>
        <div class="modal fade" id="popUpWindow" style="background-color: orange;background: linear-gradient(180deg, orange 0%, black 100%);">
            <div class="modal-dialog" style="margin-top:30vh;text-align:center">
                <div class="modal-content">
                    <!-- header -->
                    <div class="all-sign-in">
                        <div class="modal-header">
                            <h1 class="modal-title" style="color:#414141;">LOGIN</h1>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <!-- body -->
                        <div class="form-sign-in">
                            <form role="form" style="width:100%;">
                                <div class="form-group" style="padding-top: 3%;">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" style="height: 30px;font-size:14px;"
                                        placeholder="Email" id="username" />
                                    <label>Password</label>
                                    <input id="password" type="password" class="form-control" style="height:30px;font-size:14px;"
                                        placeholder="Password" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- footer -->
                    <div class="modal-footer">
                        <button class="btn btn-primary btn-block btn-lg" onClick="signup()" style="margin-top: 5px;background-color:orange;border-color:orange">Sign
                            up</button>
                        <button class="btn btn-primary btn-block btn-lg" v-on:click="state_Authen()" style="background-color:black;border-color:black"
                            id="signIn">Sign In</button>
                    </div>
    
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            authen_state: JSON.parse(localStorage.getItem("authen_state"))
        }
    },
    methods: {
        state_Authen() {
            login();
            this.authen_state = true;
            localStorage.removeItem("authen_state")
            if (this.authen_state == true) {
                localStorage.setItem("authen_state", JSON.stringify(true));
            }
        },
        set_local() {
            if (localStorage.getItem('chk') == null) {
                localStorage.setItem('chk', "set")
                var seat = [{
                        id: "C1",
                        status: false
                    },
                    {
                        id: "C2",
                        status: false
                    },
                    {
                        id: "C3",
                        status: false
                    },
                    {
                        id: "C4",
                        status: false
                    },
                    {
                        id: "C5",
                        status: false
                    },
                    {
                        id: "C6",
                        status: false
                    },
                    {
                        id: "C7",
                        status: false
                    },
                    {
                        id: "C8",
                        status: false
                    },
                    {
                        id: "C9",
                        status: false
                    },
                    {
                        id: "C10",
                        status: false
                    },
                    {
                        id: "C11",
                        status: false
                    },
                    {
                        id: "C12",
                        status: false
                    },
                    {
                        id: "B1",
                        status: false
                    },
                    {
                        id: "B2",
                        status: false
                    },
                    {
                        id: "B3",
                        status: false
                    },
                    {
                        id: "B4",
                        status: false
                    },
                    {
                        id: "B5",
                        status: false
                    },
                    {
                        id: "B6",
                        status: false
                    },
                    {
                        id: "B7",
                        status: false
                    },
                    {
                        id: "B8",
                        status: false
                    },
                    {
                        id: "B9",
                        status: false
                    },
                    {
                        id: "B10",
                        status: false
                    },
                    {
                        id: "B11",
                        status: false
                    },
                    {
                        id: "B12",
                        status: false
                    },
                    {
                        id: "A1",
                        status: false
                    },
                    {
                        id: "A2",
                        status: false
                    },
                    {
                        id: "A3",
                        status: false
                    },
                    {
                        id: "A4",
                        status: false
                    },
                    {
                        id: "A5",
                        status: false
                    },
                    {
                        id: "A6",
                        status: false
                    },
                    {
                        id: "A7",
                        status: false
                    },
                    {
                        id: "A8",
                        status: false
                    },
                    {
                        id: "A9",
                        status: false
                    },
                    {
                        id: "A10",
                        status: false
                    },
                    {
                        id: "A11",
                        status: false
                    },
                    {
                        id: "A12",
                        status: false
                    },

                ]

                var user = ['admin']
                var pass = ['admin']
                var authen_state = false;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('pass', JSON.stringify(pass));
                localStorage.setItem("authen_state", JSON.stringify(authen_state));
                localStorage.setItem('seat', JSON.stringify(seat));
                return true;
            }
            return true;
        },

    },

});