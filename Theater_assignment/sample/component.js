Vue.component('navbar', {
    template: `
    <div>
      <nav style="z-index:1000;">
          <div class="menu-icon">
              <i class="fa fa-bars fa-2x"></i>
          </div>
          <div class="logo">
          <img style="width: auto;min-width: 5%; max-width: 10%;" src="https://upload.wikimedia.org/wikipedia/th/0/01/Sf-ipad.png">
          </div>
          <div class="menu">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Sign in
</button></li>
              </ul>
              
          </div>
      </nav>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Sign in</button>
      </div>
    </div>
  </div>
</div>
    </div>`

});