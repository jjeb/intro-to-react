import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";
import Modal from "./Modal";

const petFinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  componentDidMount() {
    petFinder.pet
      .get({ output: "full", id: this.props.id })
      .then(data => {
        let breed;
        const pet = data.petfinder.pet;
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
      .catch(() => {
        navigate("/");
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const { animal, breed, location, description, name, media, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
           {
             showModal ? (
               <Modal>
                 <h1>Would you like to adopt {name}?</h1>
                 <div className="buttons">
                   <button onClick={this.toggleModal}>Yes</button>
                   <button onClick={this.toggleModal}>Maybe!</button>
                 </div>
               </Modal>
             ) : null
           }
        </div>
      </div>
    );
  }
}

export default Details;
