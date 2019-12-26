import React from 'react';
import { message } from 'antd'
import { Flow, withPropsAPI } from 'gg-editor';
import { ref } from 'react.eval'
import styles from './index.less';

class FlowBody extends React.Component {

  constructor(props: any) {
    super(props);
    ref(this);
  }

  save =()=>{
    const { propsAPI } = this.props;

    message.info(JSON.stringify(propsAPI.save()));
  };

  render(): React.ReactNode {
    const { data } = this.props;
    return <Flow className={styles.flow} data={data} />
  }
}

export default withPropsAPI(FlowBody);
