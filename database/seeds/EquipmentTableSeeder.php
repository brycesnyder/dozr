<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EquipmentTableSeeder extends Seeder
{
    /**
     * Seed the Equipment table
     *
     * @return void
     */
    public function run()
    {
        DB::table('equipment')->insert([
            'make' => 'Caterpillar',
            'model' => '420D',
            'year' => Carbon::createFromDate(2005,1,1),
            'rate' => 2000,
            'picture' => 'cat420d.png',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'Caterpillar',
            'model' => '320e',
            'year' => Carbon::createFromDate(2012,1,1),
            'rate' => 7300,
            'picture' => 'cat320e.jpg',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'John Deere',
            'model' => '6115',
            'year' => Carbon::createFromDate(2015,1,1),
            'rate' => 1700,
            'picture' => '6115M.jpg',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'Caterpillar',
            'model' => '420D',
            'year' => Carbon::createFromDate(2005,1,1),
            'rate' => 2000,
            'picture' => 'cat420d.png',
            'created_at' => Carbon::now()
        ]);


        DB::table('equipment')->insert([
            'make' => 'Case',
            'model' => '621F',
            'year' => Carbon::createFromDate(2012,1,1),
            'rate' => 3100,
            'picture' => 'CaseLoader.jpg',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'John Deere',
            'model' => '450',
            'year' => Carbon::createFromDate(2007,1,1),
            'rate' => 5500,
            'picture' => '',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'John Deere',
            'model' => '9670',
            'year' => Carbon::createFromDate(2005,1,1),
            'rate' => 44500,
            'picture' => 'imageJD.jpg',
            'created_at' => Carbon::now()
        ]);

        DB::table('equipment')->insert([
            'make' => 'TimberPro',
            'model' => '820E',
            'year' => Carbon::createFromDate(2005,1,1),
            'rate' => 15000,
            'picture' => '597fc.jpg',
            'created_at' => Carbon::now()
        ]);
    }
}
