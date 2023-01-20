
import "./login.css"
function Login() {
    return <div className="login">
    <div className="email-password">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link><form>
            <div class="row mb-3">
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Enter email id" />
                </div>
            </div>
            <div class="row mb-3">
               
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Enter password"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">login with email</button>
        </form>
        </div>
        <div className="img">
            <img src="https://img.freepik.com/premium-photo/african-american-guy-trains-gym-fists-his-boxing-bag-fists-concept-gym-fitness-boxing-success-workout-power_124865-11667.jpg?w=360" alt="photo"/>
        </div>
        </div>
}

export default Login;