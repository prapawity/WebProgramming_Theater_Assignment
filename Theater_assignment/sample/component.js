Vue.component('navbar', {
  template: `
  <div>
  <nav style="z-index:2;text-align: right;">
      <img class="logo" style="width: auto;min-width: 10%; max-width: 15%;" src="poster/moviehub1kpx.png">
          <ul style="width:100;margin-bottom:0">
              <li><a href="#" style="color:orange">Home</a></li>
              <li><a href="#" style="color:orange">About</a></li>
              <li><a href="#" style="color:orange">Blog</a></li>
              <li><a href="#" style="color:orange">Contact</a></li>
              <li><a href="#" style="color:orange">Contact</a></li>
              <li><button type='button' class="btn btn-success" data-toggle="modal" data-target="#popUpWindow">Open Log In
              Window</button></li>
          </ul>
  </nav>
  <div class="modal fade" id="popUpWindow">
      <div class="modal-dialog">
          <div class="modal-content">
              <!-- header -->
              <div class="modal-header">
              <h3 class="modal-title">Login Form</h3>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- body -->
              <div class="modal-header">
                  <form role="form" style="width:100%;">
                      <div class="form-group">
                          <input type="email" class="form-control" placeholder="Email"/>
                          <input type="password" class="form-control" placeholder="Password" />
                      </div>
                  </form>
              </div>
              <!-- footer -->
              <div class="modal-footer">
                  <button class="btn btn-primary btn-block">Log In</button>
              </div>

          </div>
      </div>
  </div>
</div>`

});