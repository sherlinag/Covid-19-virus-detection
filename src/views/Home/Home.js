import React from 'react'
import Button from '@material-ui/core/Button';
import Diesasetype from "./disease"
import { TextField, FormGroup, Box, CircularProgress } from '@material-ui/core';

const axios = require("axios");

class ReactUploadImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			file: 0,
			currentdiesasetype: "No Result",
			counter: 0,
			loader: 0,
			uri: "",
			result_data:""

		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onFormSubmit(e) {

		if (this.state.file.lastModified > 1) {

			console.log ("ttttttttttttt")

			this.setState({ loader: 1 });

			e.preventDefault();
			// let file = e.target.files[0];
			let reader = new FileReader();
			reader.readAsDataURL(this.state.file);
		
			reader.onloadend = () => {	
	
				const userdata = {
					"uri": reader.result
				};

				const options = {
					url: localStorage.getItem("url") + '/covid',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					data: JSON.stringify(userdata)

				}

				axios(options)
					.then(response => {
						if (response.status == 200) {
							this.setState({ uri: reader.result });
							this.setState({ currentdiesasetype: response.data.data });
							this.setState({ loader: 0 });
							this.setState({ result_data: "data:image/jpeg;base64,"+response.data.data2 });

						}

					})
			
			}

		}

		else {

			alert("Please choose correct file")
		}

	}
	onChange(e) {
		this.setState({ file: e.target.files[0] });

	}




	render() {
		const bg = require('./home.jpg')

		return (

			<div style={{
				backgroundImage: 'linear-gradient(#21b098, #21b098, #0bb598)',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '120vh',
				// opacity: 0.7
			}}>

				<div>

					<center>

						<div  >
							<h1 style={{ color: 'white', padding: 10, fontWeight: 'bold' }}>Upload Image</h1>
							<br></br>
							<input type="file" name="myImage" onChange={this.onChange} style={{ color: '#f78c2f', fontSize: 18, fontWeight: 'bold', marginTop: 10 }} />
							<Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} type="submit" component="span" onClick={this.onFormSubmit}>
								Submit
							</Button>

						</div>
					</center>

				</div>

				{

					this.state.loader == 1 ? (
						<Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
							<CircularProgress style={{ color: 'white' }} size={50} />
						</Box>

					) : (
						null
					)


				}



				<div style={{ marginTop: "3%", marginLeft: 20, marginRight: 20 }}>
					<Diesasetype currentdiesasetype={this.state.currentdiesasetype} uri={this.state.uri} result_data={this.state.result_data} />
				</div>




			</div>

		)
	}
}

export default ReactUploadImage