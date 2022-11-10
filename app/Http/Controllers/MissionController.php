<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;

class MissionController extends Controller
{
    public function show($id)
    {
        return view('missions/show');
    }
}
