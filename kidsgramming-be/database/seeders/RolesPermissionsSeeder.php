<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesPermissionsSeeder extends Seeder
{

    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        /* Permissions */

        // Students and Owners

        $free_courses_permission = Permission::create(['name' => 'watch-free-courses']);
        $premium_courses_permission = Permission::create(['name' => 'watch-premium-courses']);

        $create_free_subaccounts_permission = Permission::create(['name' => 'create-free-subaccounts']);
        $create_premium_subaccounts_permission = Permission::create(['name' => 'create-premium-subaccounts']);

        // Professors

        $create_courses_permission = Permission::create(['name' => 'create-courses']);
        $edit_courses_permission = Permission::create(['name' => 'edit-courses']);
        $remove_courses_permission = Permission::create(['name' => 'remove-courses-permission']);

        // Super Admins

        $create_users_permission = Permission::create(['name' => 'create-users']);

        /* ------------------------------------------------------------------------ */

        /* Roles */

        // Owner User

        $owner_free_user_role = Role::create(['name' => 'free-user-owner']);
        $owner_premium_user_role = Role::create(['name' => 'premium-user-owner']);

        $owner_free_user_role->givePermissionTo($free_courses_permission);
        $owner_free_user_role->givePermissionTo($create_free_subaccounts_permission);

        $owner_premium_user_role->givePermissionTo($free_courses_permission);
        $owner_premium_user_role->givePermissionTo($create_free_subaccounts_permission);
        $owner_premium_user_role->givePermissionTo($premium_courses_permission);
        $owner_premium_user_role->givePermissionTo($create_premium_subaccounts_permission);

        // Student User

        $student_free_user_role = Role::create(['name' => 'free_user-student']);
        $student_premium_user_role = Role::create(['name' => 'premium_user-student']);

        $student_free_user_role->givePermissionTo($free_courses_permission);
        $student_premium_user_role->givePermissionTo($premium_courses_permission);
        $student_premium_user_role->givePermissionTo($free_courses_permission);

        // Professor User

        $professor_user_role = Role::create(['name' => 'user-professor']);

        $professor_user_role->givePermissionTo($create_courses_permission);
        $professor_user_role->givePermissionTo($edit_courses_permission);
        $professor_user_role->givePermissionTo($remove_courses_permission);

        // Super admin

        $super_admin_role = Role::create(['name' => 'super-admin']);

        $super_admin_role->givePermissionTo($free_courses_permission);
        $super_admin_role->givePermissionTo($create_free_subaccounts_permission);

        $super_admin_role->givePermissionTo($free_courses_permission);
        $super_admin_role->givePermissionTo($create_free_subaccounts_permission);
        $super_admin_role->givePermissionTo($premium_courses_permission);
        $super_admin_role->givePermissionTo($create_premium_subaccounts_permission);
        $super_admin_role->givePermissionTo($free_courses_permission);
        $super_admin_role->givePermissionTo($premium_courses_permission);
        $super_admin_role->givePermissionTo($free_courses_permission);
        $super_admin_role->givePermissionTo($create_courses_permission);
        $super_admin_role->givePermissionTo($edit_courses_permission);
        $super_admin_role->givePermissionTo($remove_courses_permission);
        $super_admin_role->givePermissionTo($create_users_permission);

        /* ------------------------------------------------------------------------ */

    }
}