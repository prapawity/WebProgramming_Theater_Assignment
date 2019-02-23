Vue.component('navbar', {
  template: `
  <div>
  <nav style="z-index:2;text-align: right;background-color:tranparent">
  <a href="indextest.html">
      <img class="logo" style="width: auto;min-width: 10%; max-width: 15%;" src="poster/moviehub1kpx.png">
      </a>
          <ul style="width:100;margin-bottom:0;text-align:right">
              <li><button type='button' class="btn btn-success" data-toggle="modal" data-target="#popUpWindow" style="background-color:orange;border-color: orange;">Sign in</button></li>
          </ul>
  </nav>
  <div class="modal fade" id="popUpWindow">
      <div class="modal-dialog">
          <div class="modal-content">
              <!-- header -->
              <div class="all-sign-in">
              <div class="modal-header">
              <h3 class="modal-title">Sign in</h3>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- body -->
              <div class="form-sign-in">
                  <form role="form" style="width:100%;">
                      <div class="form-group" style="padding-top: 3%;">
                        <label>Email address</label>
                          <input type="email" class="form-control" placeholder="Email"/>
                          <label>Password</label>
                          <input type="password" class="form-control" placeholder="Password" />
                          <button type="button" class="btn btn-link">Create Account</button>
                      </div>
                  </form>
              </div>
              </div>
              <!-- footer -->
              <div class="modal-footer">
                  <button class="btn btn-primary btn-block btn-lg">Sign In</button>
              </div>

          </div>
      </div>
  </div>
</div>`

});