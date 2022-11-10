<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;
use App\Models\Person;
use App\Mail\TestEmail;
use App\Notifications\TestNotification;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

class PeopleController extends Controller
{
    public function index()
    {
        // dd(Auth::user());
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

    public function sendTestEmail()
    {
        $data = "this is a hardcoded string data";
        Mail::to("test@email.com")
            //->cc('test2@email.com)
            //->bcc('test3@email.com)
            ->send(new TestEmail($data));
    }

    public function sendTestNotification()
    {
        $user = Auth::user(); // auth()->user()

        $user->notify(new TestNotification('Hello'));

        // Notification::send($user, new TestNotification());
    }
}
