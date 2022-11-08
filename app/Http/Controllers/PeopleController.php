<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;
use App\Models\Person;

class PeopleController extends Controller
{
    public function index()
    {
        $peopleOfInterest = Person::get();
        return view('people-of-interest', compact('peopleOfInterest'));
    }

    public function show($personId)
    {
        return view('person-of-interest', compact('personId'));
    }

    public function api(Request $request)
    {
        $status = $request->input('status');
        if ($status) {
            $peopleOfInterest = Person::with('missions')->where('status_id', $status)->get();
        } else {
            $peopleOfInterest = Person::with('missions')->get();
        }
        return $peopleOfInterest;
    }
}
