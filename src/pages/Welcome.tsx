import React from 'react';
import { Card, Spin } from 'antd';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import styles from './Welcome.less';

export default class Welcome extends React.Component {

  state ={
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.load();
  }

  load = ():void => {
    const scene = new THREE.Scene();
    const width = document.getElementById('threeDemo').offsetWidth;
    const height = document.getElementById('threeDemo').offsetHeight;
    scene.background = 0x1890ff;
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      1,
      2000
    );
    camera.position.set(0, 0, 1500);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x8fd3ff, 1.0);
    renderer.setSize(width, height);
    document.getElementById('threeDemo').appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0xffffff, 2));
    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader();
    const mixers = [];
    const clock = new THREE.Clock();
    const _this = this;
    loader.load(
      "/threeData/scene.gltf",
      function(gltf) {
        scene.add(gltf.scene);
        scene.add(gltf.scene);
        const mixer = new THREE.AnimationMixer(gltf.scene.children[0]);

        mixer
          .clipAction(gltf.animations[0])
          .setDuration(40)
          .play();
        mixers.push(mixer);
        _this.setState({
          loading: false
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.02;
      const delta = clock.getDelta();
      for (let i = 0; i < mixers.length; i++) {
        // 重复播放动画
        mixers[i].update(delta);
      }
      renderer.render(scene, camera);
    }
    animate();
  };

  render(): React.ReactNode {
    const { loading } = this.state;
    return  (
      <Spin spinning={loading} wrapperClassName={styles.spinSty}>
        <Card style={{backgroundColor:'#8fd3ff'}} className={styles.cardSty}>
          <div id='threeDemo' style={{height:'100%',width:'100%', margin: '0 auto'}} />
        </Card>
      </Spin>
    );
  }
}
