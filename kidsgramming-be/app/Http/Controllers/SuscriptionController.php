<?php

namespace App\Http\Controllers;

use App\Models\Suscription;
use Illuminate\Http\Request;

class SuscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Suscription::all();
    }

    public function changeSuscription(Request $request)
    {
        $request->validate([
            'id' => ['required', 'numeric']
        ]);

        $suscription = Suscription::where('id', $request->id);
        $user = $request->user;

        if ($user->user_suscription->id == $suscription->id)
        {
            return response([
                'message' => 'Suscription already acquired'
            ], 409);
        }

        if ($suscription->name == 'free')
        {
            $user->assignRole('premium-user-owner');
            $user->removeRole('free-user-owner');
        } else {
            $user->removeRole('premium-user-owner');
            $user->assignRole('free-user-owner');
        }

        return response([
            'message' => 'Suscription updated',
            'suscription' => $user->user_suscription,
            'roles' => $user->roles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function show(Suscription $suscription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function edit(Suscription $suscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Suscription $suscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Suscription $suscription)
    {
        //
    }
}
