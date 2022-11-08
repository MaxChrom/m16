   @extends('layout.main')


   @section('content')
    <div id="react-app">
    </div>

    @viteReactRefresh()
    @vite('resources/js/people-of-interest.jsx')
   @endsection