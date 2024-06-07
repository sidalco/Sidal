# Generated by Django 4.2.7 on 2024-06-03 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0041_alter_lasermarkinginkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('KGK', 'KGK'), ('videojet', 'videojet')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('bicolor', 'bicolor'), ('EVO', 'EVO'), ('p2128', 'p2128')], max_length=50),
        ),
    ]
