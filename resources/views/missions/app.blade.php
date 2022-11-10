@extends('layout.main')     

@section('content')
    <p>react app</p>
    <div id="root">
    </div>
        @viteReactRefresh
        @vite('resources/js/missions.jsx')
@endsection