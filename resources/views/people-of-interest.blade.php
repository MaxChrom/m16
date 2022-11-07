@extends('layout.main')
@section('content')
    <div id="react-app">
        <h1>REACT APP HERE</h1>
    </div>
    @viteReactRefresh
    @vite('resources/js/people-of-interest.jsx')
@endsection