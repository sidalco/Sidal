# Generated by Django 4.2.7 on 2023-11-24 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0020_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('videojet', 'videojet'), ('KGK', 'KGK')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('co2', 'co2'), ('uv', 'uv'), ('fiber', 'fiber')], max_length=50),
        ),
    ]
