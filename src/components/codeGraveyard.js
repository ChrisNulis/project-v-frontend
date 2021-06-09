render() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Banner />
        <Content />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Indiv" component={Indiv} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        <Map />
        <Weather />
        <Footer />
      </div>
    </Router>

    // deleteVenues = (event) => {
    //   axios.delete('https://nulis-final-project-one.herokuapp.com' + event.target.getAttribute("name")).then((response) => {
    //     this.getVenues()
    //   })
    // }
    //
    // updateVenues = (event) => {
    //   event.preventDefault()
    //   const id = event.target.getAttribute("name")
    //   axios
    //   .put('https://nulis-final-project-one.herokuapp.com' + id, this.state)
    //   .then((response) => {
    //     this.setState({
    //       venues: response.data,
    //       img:'',
    //       name:'',
    //       date:'',
    //       location:'',
    //       description:'',
    //
    //     })
    //   })
    // }
    //
    // componentDidMount = (event) => {
    //   axios
    //   .get('https://nulis-final-project-one.herokuapp.com')
    //   .then(response =>
    //     this.setState({
    //       venues: response.data,
    //     }))
    // }
