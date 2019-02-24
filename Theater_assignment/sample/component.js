Vue.component('navbar', {
  template: `
  <div>
  <nav style="z-index:2;text-align: right;background-color:tranparent">
  <a href="indextest.html">
      <img class="logo" style="width: auto;min-width: 10%; max-width: 15%;padding:10px" src="poster/moviehub1kpx.png">
      </a>
          <ul style="width:100;margin-bottom:0;text-align:right">
              <li><button type='button' class="btn btn-success btn-lg" data-toggle="modal" data-target="#popUpWindow" style="background-color:orange;border-color: orange;color: black;">Sign in/Sign up</button></li>
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
                          <input type="email" class="form-control" style="height: 30px;font-size:14px;" placeholder="Email" id="username"/>
                          <label>Password</label>
                          <input id="password" type="password" class="form-control" style="height:30px;font-size:14px;" placeholder="Password" />
                      </div>
                  </form>
              </div>
              </div>
              <!-- footer -->
              <div class="modal-footer">
                    <button class="btn btn-primary btn-block btn-lg" onClick="signup()" style="margin-top: 5px;background-color:orange;border-color:orange">Sign up</button>
                  <button class="btn btn-primary btn-block btn-lg" onClick="login()" style="background-color:black;border-color:black">Sign In</button>
              </div>

          </div>
      </div>
  </div>
</div>`

});