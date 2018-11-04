import React,{Component} from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/ModalContainer.js';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js';
import VideoPlayer from '../../player/containers/player-video.js';

class Home extends Component{

  render(){

      return(
        <HandleError>
          <VideoPlayer>
          </VideoPlayer>
          <HomeLayout>
            <Related/>
            <Categories categories={this.props.data.categories}/>
            <ModalContainer>
              <Modal>
              </Modal>
            </ModalContainer>
          </HomeLayout>
        </HandleError>
      )
    }
}

export default Home
