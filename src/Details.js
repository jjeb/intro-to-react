import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";

const petFinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    petFinder.pet
      .get({ output: "full", id: this.props.id })
      .then(data => {
        let breed;
        const pet = data.petfinder;

        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.aniaml,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      // .catch(() => {
      //   navigate("/");
      // });
  }

  render() {
    return <h1>lol</h1>;
  }
}

export default Details;
