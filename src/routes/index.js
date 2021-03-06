import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="articlesList"
          title="Articles List"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} />
        </Stack>

        <Stack
          key="form"
          title="Articles Form"
          icon={() => <Icon name="add" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
        <Stack
          key="profile"
          title={AppConfig.appName}
          icon={() => <Icon name="person" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profile" component={AboutComponent} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
