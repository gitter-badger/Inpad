import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Main from './Main'
import StorageIndex from './contents/StorageIndex'
import NoteList from './contents/NoteList'
import StorageCreate from './contents/StorageCreate'

const routes = (
  <Route path='/' component={Main}>

    <IndexRedirect to='storages/Notebook' />

    <Route path='storages/:storageName'>
      <IndexRedirect to='folders/Notes' />
      <Route path='all-notes' component={NoteList} />
      <Route path='settings' component={StorageIndex} />
      <Route path='folders/:folderName' component={NoteList} />
    </Route>

    <Route path='new-storage' component={StorageCreate} />

  </Route>
)

export default routes
