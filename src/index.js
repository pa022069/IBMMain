import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom';

import './function/menu.js'

const Layout = lazy(() => import(/* webpackChunkName: "Layout" */'./component/Layout'));

render(
    <Suspense fallback={<p>Loading...</p>}>
        <Layout/>
    </Suspense>
, document.getElementById("root"));