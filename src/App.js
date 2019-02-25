import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Table />
          {/*<FragmentDemo />*/}
          {/*<LifecycleA />*/}
          {/*<Form />*/}
          {/*<Message />*/}
          {/*<Counter />*/}
          {/*<FunctionClick />*/}
          {/*<ClassClick />*/}
          {/*<EventBind />*/}
          {/*<ParentComponent />*/}
          {/*<UserGreeting />*/}
          {/*<NameList />*/}
          {/*<StyleSheet primary={false} />*/}
          {/*<Inline />*/}
          {/*<h6 className='error'>Error</h6>*/}
          {/*<h6 className={styles.success}>Sucess</h6>*/}
          {/*<Inline />*/}
          {/*<Greet name="Bruce" heroName="Batman" >
            <p>This is children props</p>
          </Greet>*/}
          {/*<Welcome name="Ram" heroName="Lakshman">
           <p>This is children props for Welcome</p>
          </Welcome>*/}
        </div>
    );
  }
}

export default App;
