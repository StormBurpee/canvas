<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlugToUserMetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('canvas_user_meta', function (Blueprint $table) {
            $table->string('slug');
            $table->index('slug', 'userMetaSlugIndex');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('canvas_user_meta', function (Blueprint $table) {
            $table->dropIndex('userMetaSlugIndex');
            $table->dropColumn('slug');
        });
    }
}
