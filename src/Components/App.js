import React, {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';       
import LoaderSection from './Loader/Loader';


const KEY = "16030108-62f306d6543cc766a6e8f4e47";
const get = (query, page = 1) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

class App extends Component {
  state = {
    gallery: [],
    query: "",
    page: 1,
    isLoading: false,
    error: false,
  };

  onChangeQuery = (query) => {
    this.setState({
      query,
      page: 1,
      gallery: [],
    });
  };

  fetchRequest = async () => {
    try {
      const { query, page } = this.state;
      const response = await get(query, page);
      return response.data.hits;
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.fetchRequest();
        this.setState({
          gallery: [...result],
          isLoading: false,
        });
      };
      request();
    }

    if (page !== prevState.page) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.fetchRequest();
        this.setState((state) => ({
          gallery: [...state.gallery, ...result],
          isLoading: false,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      };
      request();
    }
  }

  pageChanger = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onChangeQuery={this.onChangeQuery} />
        {error && <h1>something gone wrong, try again later</h1>}
        {!!gallery.length && !error && (
          <>
            <ImageGallery gallery={gallery} />
            {!isLoading && <Button pageChanger={this.pageChanger} />}
          </>
        )}
        {isLoading && <LoaderSection />}
      </>
    );
  }
}

export default App;
