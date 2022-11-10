<?php

namespace App\Http\Controllers\Api;

use App\Models\Mission;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;
use App\Http\Controllers\Controller;

class MissionController extends Controller
{
    public function find($id)
    {
        $mission = Mission::find($id);
        return $mission;
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'year' => 'required|integer',
            'outcome' => [
                'nullable',
                Rule::in(['', '1', '0'])
            ],
        ]);

        $data = $request->all();

        if (empty($data['id'])) {
            //creating new mission
            $mission = new Mission;
        } else {
            //updating an existing one
            $mission = Mission::findOrFail($data['id']);
        }

        //fill the objects with data from request 
        $mission->name = $data['name'];
        $mission->year = $data['year'];
        $mission->outcome = $data['outcome'];
        //save the object into database 
        $mission->save();
        //respond with data that the fronted end might need
        return [
            'status' => 'success',
            'mission' => $mission
        ];
    }
}
